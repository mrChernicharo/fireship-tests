# Testando Classes Typescript com Jest

\*_A classe precisa estar num arquivo exclusivo dela, se houver código fora do escopo da classe, tipo import de CSS, ou manipulação de DOM o jest se perde_

\*_Precisa instalar a dependência ts-jest e acrescentar as seguintes informações no package.json:_

"jest": {
"transform": {
"^.+\\.tsx?$": "node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
"moduleFileExtensions": [
"ts",
"tsx",
"js",
"jsx",
"json"
]
}
