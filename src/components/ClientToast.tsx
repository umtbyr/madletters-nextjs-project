"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { parseCookies, destroyCookie } from "nookies";

export function ClientToast({ name }: { name: string }) {
  useEffect(() => {
    localStorage.setItem("userName", name);
    const cookies = parseCookies();

    if (cookies.isCreated === "true") {
      toast.success(`🎉 Hoşgeldiniz! ${name} oluşturuldu.`);
      destroyCookie(null, "isCreated", { path: "/" });
    } else if (cookies.isCreated === "false") {
      toast.success(`🎉 Hoşgeldiniz!`);
      destroyCookie(null, "isCreated", { path: "/" });
    }
  }, []);

  return null;
}
