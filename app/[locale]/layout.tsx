import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <LoadingSpinner />
      <>{children}</>
    </>
  );
}
