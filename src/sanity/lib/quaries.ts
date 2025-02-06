import { groq } from "next-sanity";

export const allblog=groq`*[_type=="blog"]`
