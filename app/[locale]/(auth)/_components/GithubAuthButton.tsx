import React from "react";
import ButtonAccount from "@/components/ButtonAccount";
import { FaGithub } from "react-icons/fa";
export default function GithubAuthButton() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/Account/LoginWithGitHub`;
  };
  return (
    <div>
      <ButtonAccount
        icon={<FaGithub size={20} />}
        label="Continue with Github"
        bgColor="#444444"
        color="#ffffff"
        // onClick={() => signIn("facebook")}
        onClick={handleLogin}
      />
    </div>
  );
}
