import { openDB, DBSchema } from 'idb';

interface SmachsDB extends DBSchema {
    progress: {
        key: string;
        value: {
            userId: string;
            moduleId: string;
            lessonId: string;
            completed: boolean;
            timestamp: number;
            synced: boolean;
        };
        indexes: { 'by-user': string; 'by-sync-status': number };
    };
    modules: {
        key: string;
        value: {
            id: string;
            title: string;
            content: any;
            downloadedAt: number;
        };
    };
}

const dbPromise = openDB<SmachsDB>('smachs-db', 1, {
    upgrade(db) {
        const progressStore = db.createObjectStore('progress', { keyPath: ['userId', 'moduleId', 'lessonId'] });
        progressStore.createIndex('by-user', 'userId');
        progressStore.createIndex('by-sync-status', 'synced' as any); // Type assertion needed for boolean index in some TS versions

        db.createObjectStore('modules', { keyPath: 'id' });
    },
});

export const offlineService = {
    async saveProgress(userId: string, moduleId: string, lessonId: string, completed: boolean) {
        return (await dbPromise).put('progress', {
            userId,
            moduleId,
            lessonId,
            completed,
            timestamp: Date.now(),
            synced: false,
        });
    },

    async getUnsyncedProgress() {
        // This is a simplified query. Real implementation might use an index.
        const allProgress = await (await dbPromise).getAll('progress');
        return allProgress.filter(p => !p.synced);
    },

    async markSynced(userId: string, moduleId: string, lessonId: string) {
        const db = await dbPromise;
        const record = await db.get('progress', IDBKeyRange.only([userId, moduleId, lessonId]));
        if (record) {
            record.synced = true;
            await db.put('progress', record);
        }
    },

    async downloadModule(module: any) {
        return (await dbPromise).put('modules', {
            ...module,
            downloadedAt: Date.now(),
        });
    },

    async getOfflineModule(moduleId: string) {
        return (await dbPromise).get('modules', moduleId);
    },
};
