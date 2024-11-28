import LoadingSpinner from "@/components/LoadingSpinner";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_ID as string;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <LoadingSpinner />
        <>{children}</>
      </GoogleOAuthProvider>
    </>
  );
}
