import { useEffect, useState } from "react";

const GoogleOneTap = () => {
  const [isRequesting, setIsRequesting] = useState(false);

  useEffect(() => {
    const googleClientId = "161835235913-4i07b20pfd834ceci75csdo249nm7a8h.apps.googleusercontent.com";

    if (!googleClientId) {
      console.error("Google Client ID is missing!");
      return;
    }

    if (typeof window !== "undefined" && window.google) {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: (response) => {
          console.log("Google One Tap response:", response);

          setIsRequesting(false);
        },
      });

      if (!isRequesting) {
        setIsRequesting(true);
        window.google.accounts.id.prompt();
      }
    }
  }, [isRequesting]);

  return null;
};

export default GoogleOneTap;
