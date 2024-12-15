import React from "react";
import ButtonAccount from "@/components/ButtonAccount";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { GoogleOriginal } from "devicons-react";
export default function GoogleAuthButton() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/Account/LoginWithGoogle`;
  };
  return (
    <div>
      <ButtonAccount
        icon={<GoogleOriginal size={20} />}
        bgColor="rgb(255, 255, 255)"
        color="rgb(32, 65, 91)"
        label="Continue with Google"
        // onClick={() => signIn("google", { callbackUrl: "/en/home", redirect: true })}
        onClick={handleLogin}
      />
    </div>
  );
}
