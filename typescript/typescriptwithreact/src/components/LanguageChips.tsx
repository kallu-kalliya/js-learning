import { clsx } from "clsx";
import type { JSX } from "react";
import type { Languages } from "../languages";

/*
CHALLENGE 1: Somehow access the Language type in
             `languages.ts` from `LanguageChips.tsx`
CHALLENGE 2: Use it to type the languages prop
CHALLENGE 3: Type the remaining props
*/

export default function LanguageChips({
  languages,
  wrongGuessCount,
}: {
  languages: Languages[];
  wrongGuessCount: number;
}): JSX.Element {
  /*
    CHALLENGE 1: Type lang and index, the parameters of the callback function
    CHALLENGE 2: Type the return value of the callback function
    CHALLENGE 3: Type languageElements
    */

  const languageElements: JSX.Element[] = languages.map(
    (lang: Languages, index: number): JSX.Element => {
      /*
        CHALLENGE: Type isLanguageLost, styles, and className
        HINT: TS's Omit utility type might come in handy here!
        */

      const isLanguageLost: boolean = index < wrongGuessCount;
      const styles: Omit<Languages, "name"> = {
        backgroundColor: lang.backgroundColor,
        color: lang.color,
      };
      const className = clsx("chip", isLanguageLost && "lost");
      return (
        <span className={className} style={styles} key={lang.name}>
          {lang.name}
        </span>
      );
    },
  );

  return <section className="language-chips">{languageElements}</section>;
}
