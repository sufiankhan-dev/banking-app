import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src={"/icons/newimgauth.svg"}
            alt="auth image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </main>
  );
}
