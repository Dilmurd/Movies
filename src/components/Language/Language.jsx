import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [lang, setLang] = useState("ru");
  const {i18n} = useTranslation()
  useEffect(()=> {
    i18n.changeLanguage(lang)
},[])
  return (
    <>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        name=""
        id=""
      >
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
    </>
  );
}

export default Language;
