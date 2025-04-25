"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { parseCookies, destroyCookie } from "nookies";

export function ClientToast() {
  useEffect(() => {
    const cookies = parseCookies();

    if (cookies.isCreated === "true") {
      toast.success(`🎉 Hoşgeldiniz! kullanıcı oluşturuldu.`);
      destroyCookie(null, "isCreated", { path: "/" });
    } else if (cookies.isCreated === "false") {
      toast.success(`🎉 Hoşgeldiniz!`);
      destroyCookie(null, "isCreated", { path: "/" });
    }
  }, []);

  return null;
}
