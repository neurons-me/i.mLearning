//create a Language Class
class Language {
    constructor() {
        this.language = 'en';
        this.languageData = {};
    }   
    //set the language
    setLanguage(language) {
        this.language = language;
    }   
    //get the language
    getLanguage() { 
        return this.language;
    }
    //set the language data
    setLanguageData(languageData) {
        this.languageData = languageData;
    }
    //get the language data by key
    getLanguageDataByKey(key) {
        return this.languageData[key];
    }
    //get the language data by key and replace the placeholders
    getLanguageDataByKeyAndReplace(key, placeholders) {
        let languageData = this.languageData[key];
        if (placeholders) {
            for (let placeholder in placeholders) {
                languageData = languageData.replace(placeholder, placeholders[placeholder]);
            }
        }
        return languageData;
    }   
    //get the language data by key and replace the placeholders
    getLanguageDataByKeyAndReplaceWithArray(key, placeholders) {
        let languageData = this.languageData[key];
        if (placeholders) {
            for (let placeholder in placeholders) {
                languageData = languageData.replace(placeholder, placeholders[placeholder]);
            }
        }
        return languageData;
    };
}
//export the Language class
module.exports = Language;
// Path: src/%40npm/i.mLearning/src/language/Language.js