import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

const ProfilePage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+254 712 345 678',
        location: 'Nairobi, Kenya',
        role: 'Learner',
        joinedDate: 'October 2023',
        bio: 'Passionate about sustainable agriculture and climate-smart farming practices.',
    });

    const stats = [
        { label: 'Modules Completed', value: '2', icon: Award },
        { label: 'Hours Learned', value: '24.5', icon: Calendar },
        { label: 'Certificates Earned', value: '1', icon: Award },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
                <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Info */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Personal Information</CardTitle>
                                <Button
                                    variant={isEditing ? "default" : "outline"}
                                    onClick={() => setIsEditing(!isEditing)}
                                >
                                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                                    {profile.fullName.split(' ').map(n => n[0]).join('')}
                                </div>
                                {isEditing && (
                                    <Button variant="outline" size="sm">Upload Photo</Button>
                                )}
                            </div>

                            <div className="grid gap-4">
                                <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground">Full Name</p>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profile.fullName}
                                                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2"
                                            />
                                        ) : (
                                            <p className="font-medium">{profile.fullName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                value={profile.email}
                                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2"
                                            />
                                        ) : (
                                            <p className="font-medium">{profile.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground">Phone</p>
                                        {isEditing ? (
                                            <input
                                                type="tel"
                                                value={profile.phone}
                                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2"
                                            />
                                        ) : (
                                            <p className="font-medium">{profile.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profile.location}
                                                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2"
                                            />
                                        ) : (
                                            <p className="font-medium">{profile.location}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Bio</p>
                                {isEditing ? (
                                    <textarea
                                        value={profile.bio}
                                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                                    />
                                ) : (
                                    <p className="text-sm">{profile.bio}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Learning Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <stat.icon className="h-5 w-5 text-primary" />
                                        <span className="text-sm">{stat.label}</span>
                                    </div>
                                    <span className="font-bold text-lg">{stat.value}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Account Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <p className="text-sm text-muted-foreground">Role</p>
                                <p className="font-medium">{profile.role}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Member Since</p>
                                <p className="font-medium">{profile.joinedDate}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
