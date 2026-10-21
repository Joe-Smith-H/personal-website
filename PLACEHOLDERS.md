# Placeholders to replace

Everything below is a placeholder. The photographs are from Unsplash and are
used under the Unsplash License; swap each one for your own work when you have
it.

## Photographs

| File | Where it appears | Replace with | Current source |
| --- | --- | --- | --- |
| `public/photos/hero.webp` | Top of the page, beside the headline | A portrait that sets the tone of the site (3:4) | https://images.unsplash.com/photo-1524504388940-b1c1722653e1 |
| `public/photos/about.webp` | Introduction section, left column | A photograph of you, or you at work (4:5) | https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e |
| `public/photos/portrait-blue.webp` | Work gallery, "Ivy" | A portrait from your portfolio (4:5) | https://images.unsplash.com/photo-1534528741775-53994a69daeb |
| `public/photos/wedding-vows.webp` | Work gallery, "Late light" | A wedding photograph (3:2) | https://images.unsplash.com/photo-1519741497674-611481863552 |
| `public/photos/portrait-ama.webp` | Work gallery, "Ama" | A portrait from your portfolio (4:5) | https://images.unsplash.com/photo-1531123897727-8f129e1688ce |
| `public/photos/wedding-beach.webp` | Work gallery, "Ella & James" | A wedding or couple photograph (3:4) | https://images.unsplash.com/photo-1537633552985-df8429e8048b |
| `public/photos/portrait-nadia.webp` | Work gallery, "Nadia" | A portrait from your portfolio (4:5) | https://images.unsplash.com/photo-1494790108377-be9c29b29330 |
| `public/photos/landscape-lake.webp` | Work gallery, "Moraine Lake" | A landscape or personal photograph (3:2) | https://images.unsplash.com/photo-1493246507139-91e8fad9978e |
| `public/photos/portrait-editorial.webp` | Work gallery, "Daniel" | An editorial or commercial portrait (4:5) | https://images.unsplash.com/photo-1519085360753-af0119f7cbe7 |
| `public/photos/landscape-forest.webp` | Work gallery, "The long way home" | A landscape or personal photograph (3:2) | https://images.unsplash.com/photo-1441974231531-c6227db76b6e |

When you swap an image, update its caption and alt text in `lib/photos.ts` so
the gallery stays accurate. Alt text should describe what is in the photograph,
not repeat the caption.

## Text and details

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `Mara Ellison` | Header, footer, page metadata | Your name |
| `hello@maraellison.com` | Header button, hero, contact section, footer | Your email address |
| `Portland, Oregon` | Introduction facts, contact details, footer | Your city |
| `@mara.ellison` and the Instagram URL | Contact section, footer | Your Instagram handle and profile URL |
| `Now booking sessions and weddings from January 2027.` | Contact details | Your current availability |
| `since 2014` | Introduction facts | The year you started photographing |
| Pricing figures | Pricing section | Your own rates |

All of these live in `lib/content.ts`, except the page copy in `app/page.tsx`
and the site title in `app/layout.tsx`.
