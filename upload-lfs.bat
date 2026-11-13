@echo off
echo ==========================================
echo Configurar e Enviar Arquivo via Git LFS
echo ==========================================
echo.
set /p filename="Digite o nome do arquivo grande (com a extensao, ex: banco.bak): "

IF "%filename%"=="" (
    echo.
    echo Erro: O nome do arquivo nao pode ser vazio!
    pause
    exit /b
)

echo.
echo [1/5] Inicializando o Git LFS...
git lfs install

echo.
echo [2/5] Rastrando o arquivo %filename%...
git lfs track "%filename%"

echo.
echo [3/5] Adicionando arquivos ao Git (staging)...
git add .gitattributes
git add "%filename%"

echo.
echo [4/5] Criando o commit...
git commit -m "Adiciona %filename% via Git LFS"

echo.
echo [5/5] Fazendo o push para o GitHub...
git push

echo.
echo ==========================================
echo Processo concluido! 
echo Verifique acima se o push foi feito com sucesso.
echo ==========================================
pause