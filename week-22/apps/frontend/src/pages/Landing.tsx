import heroVideo from "@/assets/hero.mp4";
import hero1 from "@/assets/hero1.mp4";
import hero2 from "@/assets/hero2.mp4";
import hero3 from "@/assets/hero3.mp4";

const showcaseVideos = [hero1, hero2, hero3];

import { Navigate } from 'react-router'
import { Button } from "@/components/ui/button";
import {
    Camera,
    Cloud,
    Sparkles,
    Video,
    ArrowRight,
} from "lucide-react";

export function Landing() {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to={"/dashboard"} />
    }

    return (
        <div className="bg-background text-foreground">
            {/* ---------------- Hero ---------------- */}
            <section className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/65" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
                        AI Cinematic Video Generation
                    </span>

                    <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                        Generate
                        <br />
                        <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Cinematic AI Videos
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-gray-300">
                        Upload one image.
                        <br />
                        Generate Hollywood-quality cinematic shots with consistent avatars.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <Button size="lg" className="text-lg">
                            Start Creating
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button variant="outline" size="lg">
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* ---------------- Showcase ---------------- */}

            <section className="mx-auto max-w-7xl px-6 py-24">
                <h2 className="text-center text-4xl font-bold">
                    Showcase
                </h2>

                <p className="mt-3 text-center text-muted-foreground">
                    AI-generated cinematic videos
                </p>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {showcaseVideos.map((video, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border bg-card"
                        >
                            <video
                                autoPlay
                                loop
                                controls
                                muted
                                className="aspect-video w-full object-cover"
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- Features ---------------- */}

            <section className="border-y bg-muted/30 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-center text-4xl font-bold">
                        Features
                    </h2>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <FeatureCard
                            icon={<Camera className="h-8 w-8" />}
                            title="Camera Controls"
                            description="Create orbit, dolly, drone and close-up shots with AI."
                        />

                        <FeatureCard
                            icon={<Sparkles className="h-8 w-8" />}
                            title="Avatar Consistency"
                            description="Keep the same character across every generated scene."
                        />

                        <FeatureCard
                            icon={<Video className="h-8 w-8" />}
                            title="Fast Generation"
                            description="Generate cinematic videos in just a few minutes."
                        />

                        <FeatureCard
                            icon={<Cloud className="h-8 w-8" />}
                            title="Cloud Storage"
                            description="Every avatar and video is securely stored."
                        />
                    </div>
                </div>
            </section>

            {/* ---------------- How it works ---------------- */}

            <section className="mx-auto max-w-6xl px-6 py-24">
                <h2 className="text-center text-4xl font-bold">
                    How it Works
                </h2>

                <div className="mt-20 flex flex-col items-center gap-8 text-center md:flex-row md:justify-between">
                    <Step title="Upload Photo" />

                    <ArrowRight className="hidden md:block" />

                    <Step title="Generate Avatar" />

                    <ArrowRight className="hidden md:block" />

                    <Step title="Write Prompt" />

                    <ArrowRight className="hidden md:block" />

                    <Step title="Generate Video" />
                </div>
            </section>

            {/* ---------------- CTA ---------------- */}

            <section className="border-t py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-5xl font-bold">
                        Ready to Create?
                    </h2>

                    <p className="mt-6 text-muted-foreground">
                        Start generating cinematic AI videos today.
                    </p>

                    <Button className="mt-10" size="lg">
                        Start Creating
                    </Button>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5">{icon}</div>

            <h3 className="text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    );
}

function Step({ title }: { title: string }) {
    return (
        <div className="flex h-36 w-36 items-center justify-center rounded-full border bg-card text-center font-semibold">
            {title}
        </div>
    );
}