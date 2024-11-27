import React from "react";
import ButtonAccount from "@/components/ButtonAccount";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
export default function FacebookAuthButton() {
  return (
    <div>
      <ButtonAccount
        icon={<FaFacebook size={20} />}
        label="Continue with Facebook"
        onClick={() => signIn("facebook")}
      />
    </div>
  );
}
