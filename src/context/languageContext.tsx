import { createContext, useState, ReactElement, FC } from "react";

export enum LangEnums {
    UZ = "uz",
    RU = "ru",
    ENG = "eng",
}

interface LanguageProProps {
    children: ReactElement;
}
interface LanguageContext {
    language: LangEnums | string;
    setLang?: (newLang: LangEnums) => void;
}

export const LanguageContext = createContext<LanguageContext>(
    {} as LanguageContext
);

const LanguageProvider: FC<LanguageProProps> = ({ children }) => {
    const localLang = localStorage.getItem("language");
    const initialLanguage = localLang || LangEnums.UZ;
    const [language, setLanguage] = useState(initialLanguage);

    function setLang(lang: LangEnums) {
        localStorage.setItem("language", lang);
        setLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ language, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
