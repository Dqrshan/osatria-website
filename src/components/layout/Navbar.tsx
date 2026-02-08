"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth";
import { Button } from "@/components/ui/button";
import { Github, LogOut, LayoutDashboard, User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDashboardBase } from "@/lib/routes/dashboard";

export function Navbar() {
    const { user, userData, loginWithGithub, logout, loading } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        await loginWithGithub();
    };

    const getDashboardLink = () => {
        if (!userData) return "/";
        return getDashboardBase(userData.role);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-surface-lighter bg-surface/80 backdrop-blur-md text-ink">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-black tracking-tighter text-2xl">
                        OS<span className="text-primary group-hover:text-accent transition-colors">ATRIA</span>
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/repositories" className="hover:text-primary transition-colors">Repositories</Link>
                    <Link href="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link>
                    <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                </div>

                {/* Auth / Right Side */}
                <div className="flex items-center gap-4">
                    {loading ? (
                        <div className="h-8 w-20 bg-surface/10 animate-pulse rounded" />
                    ) : user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-ink p-0 overflow-hidden hover:opacity-80">
                                    <img
                                        src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
                                        alt="Avatar"
                                        className="h-full w-full object-cover"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{userData?.githubUsername || "User"}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={getDashboardLink()} className="cursor-pointer">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="https://github.com/settings/profile" target="_blank" className="cursor-pointer">
                                        <User className="mr-2 h-4 w-4" />
                                        GitHub Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={async () => {
                                        await logout();
                                        router.push("/");
                                    }}
                                    className="text-destructive cursor-pointer"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button onClick={handleLogin} variant="brutalist" size="sm">
                            <Github className="mr-2 h-4 w-4" /> Login
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
