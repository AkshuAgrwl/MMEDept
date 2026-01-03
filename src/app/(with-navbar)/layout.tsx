import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-30">
        <Navbar
          navigationData={[
            {
              title: "Home",
              href: "/",
            },
          ]}
        />
      </div>
      <div className="flex flex-col grow bg-background">{children}</div>
    </>
  );
}
