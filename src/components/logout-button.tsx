import { signOut } from "@/lib/auth";

import { Button } from "@/components/ui/button";

export function LogoutButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <form
      className={className}
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="outline" type="submit">
        {children ? children : "Logout"}
      </Button>
    </form>
  );
}
