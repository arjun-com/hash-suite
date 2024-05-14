import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";

export const brico = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "200"], variable: "--font-header" })
export const inter = Inter({ subsets: ["latin"], weight: ["400"], variable: "--font-sans" })
export const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300"], variable: "--font-mono" })
