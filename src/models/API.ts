export interface User {
    id: string;
    _id: string;
    first: string;
    last: string;
    email: string;
    img_url?: string;
    dateOfBirth?: Date;
    bio?: string;
    location: { latitude: number; longitude: number }[];
}

export interface Habit {
    id: string;
    name: string; 
    target: number; //targeted goal
    currentProgress: number; 
    completed?: boolean; 
    frequency?: string; //daily or weekly
    reminderTime?: Date; //schedule reminder
    notes?: string; //habit desc
    goalId?: string;
    streak?: number; 
    points?: number;

}

export interface Goal {
    id: string; 
    title: string; 
    description?: string; 
    startDate: Date; 
    endDate?: Date; 
    habits?: Habit[]
}

export interface Challenge {
    id: string; 
    name: string; 
    description: string; 
    startDate: string; 
    endDate: string; 
    participants: User[]; 
    habits?: Habit[];
}

export interface DailyProgress {
    date: Date; 
    completedHabits: number; 
    pointsEarned?: number;
}

export interface ActivitySummary{ 
    successRate: number; 
    pointsEarned: number;
    bestStreakDay: number; 
}