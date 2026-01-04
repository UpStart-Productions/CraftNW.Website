export const ORG_CONTACT = {
  email: "hello@craft-nw.com",
  phone: "",
  location: "Newberg, Oregon",
};

export const ORG_SOCIALS = {
  instagram: "https://www.instagram.com/craft_nw/",
  etsy: "https://www.etsy.com/shop/CraftNWDesigns",
  behance: "https://www.behance.net/chiefupstart",
  pinterest: "https://www.pinterest.com/CraftNWDesigns/",
  facebook: "",
};

export type SocialKey = keyof typeof ORG_SOCIALS;

export function getEnabledSocials(): Array<{ key: SocialKey; href: string }> {
  return (Object.keys(ORG_SOCIALS) as SocialKey[])
    .map((key) => ({ key, href: ORG_SOCIALS[key] }))
    .filter((s) => Boolean(s.href));
}

