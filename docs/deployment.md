# Despliegue

El proyecto es un site estatico. No requiere build, dependencias ni bundler.

## Local

```bash
python3 -m http.server 4173
```

Abrir:

```text
http://127.0.0.1:4173/
```

## GitHub Pages

Configuracion recomendada:

- Build type: GitHub Actions.
- Workflow: `.github/workflows/pages.yml`.
- Branch fuente: `main`.
- Carpeta publicada: `/`.
- Dominio: el que genere GitHub Pages.

Comandos utiles:

```bash
git status -sb
git add index.html styles.css script.js README.md docs/*.md .github/workflows/pages.yml .nojekyll
git commit -m "Add medieval planning site"
git push -u origin main
```

Configurar Pages para GitHub Actions:

```bash
gh api -X PUT repos/marcoscv-work/medieval-panning/pages \
  --input pages-workflow.json
```

Donde `pages-workflow.json` contiene:

```json
{"build_type":"workflow"}
```

Consultar estado:

```bash
gh api repos/marcoscv-work/medieval-panning/pages
gh run list --workflow pages.yml
```

## Validacion antes de publicar

- `node --check script.js`
- Abrir el site localmente.
- Comprobar que se renderizan 5 fases.
- Comprobar que se renderizan 35 mecanismos.
- Probar panel emergente.
- Probar al menos un filtro.
