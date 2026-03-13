"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function Clarity() {
  useEffect(() => {
    clarity.init("vv2uzkd1qy");
  }, []);

  return null;
}
