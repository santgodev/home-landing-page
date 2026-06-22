import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permitir que la app cargue en celulares dentro de la misma red Wi-Fi o Hotspot
  allowedDevOrigins: ['192.168.1.129', '172.20.10.5'],
};

export default nextConfig;
