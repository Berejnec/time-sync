import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <UserProfile />
    </div>
  );
}
