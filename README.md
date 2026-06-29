# Valen Hernández · Portfolio Web

Sitio web profesional para **Valen Hernández**, estratega de contenido y social media manager.

---

## Estructura de archivos

```
portfolio-valen/
├── index.html            ← Página principal (todo el contenido)
├── styles.css            ← Estilos visuales
├── script.js             ← Interactividad (menú, FAQ, videos, animaciones)
├── .nojekyll             ← Necesario para GitHub Pages
├── README.md             ← Este archivo
└── assets/
    ├── images/
    │   ├── foto-hero.jpg         ← Tu foto principal (hero)
    │   ├── foto-sobre-mi.jpg     ← Foto sección "Sobre mí"
    │   ├── foto-contacto.jpg     ← Foto sección contacto
    │   ├── og-image.jpg          ← Imagen para redes sociales (1200×630px)
    │   ├── cliente-1.jpg         ← Foto testimonio 1
    │   ├── cliente-2.jpg         ← Foto testimonio 2
    │   ├── cliente-3.jpg         ← Foto testimonio 3
    │   ├── video-thumb-1.jpg     ← Portada video 1
    │   ├── video-thumb-2.jpg     ← Portada video 2
    │   ├── video-thumb-3.jpg     ← Portada video 3
    │   └── video-thumb-4.jpg     ← Portada video 4
    ├── logos/
    │   ├── alkomprar.png         ← Logo Alkomprar
    │   ├── kalley.png            ← Logo Kalley
    │   ├── chevignon.png         ← Logo Chevignon
    │   ├── simon-pulgarin.png    ← Logo Simón Pulgarín
    │   ├── norma.png             ← Logo Norma
    │   ├── sentido-optico.png    ← Logo Sentido Óptico
    │   └── palpitare.png         ← Logo Palpitare
    ├── videos/
    │   ├── video-1.mp4           ← Video portafolio 1
    │   ├── video-2.mp4           ← Video portafolio 2
    │   ├── video-3.mp4           ← Video portafolio 3
    │   └── video-4.mp4           ← Video portafolio 4
    └── icons/
        └── favicon.png           ← Ícono del sitio (32×32 o 64×64px)
```

---

## Abrir la web localmente

1. Abre la carpeta `portfolio-valen/` en tu explorador de archivos.
2. Haz doble clic en `index.html` para abrirla en el navegador.

> Para una experiencia más fiel (especialmente los videos), usa un servidor local:
> - Con VS Code: instala la extensión **Live Server** y haz clic en "Go Live".
> - Con Python: abre la terminal en la carpeta y ejecuta `python3 -m http.server 8080`, luego abre `http://localhost:8080`.

---

## Reemplazar imágenes y logos

Simplemente coloca tus archivos en las carpetas indicadas con los **mismos nombres** que aparecen en la estructura. El sitio los cargará automáticamente.

**Recomendaciones de tamaño:**
- `foto-hero.jpg` → mínimo 600×750px, formato vertical
- `foto-sobre-mi.jpg` → mínimo 500×650px, formato vertical
- `og-image.jpg` → exactamente 1200×630px
- `favicon.png` → 64×64px con fondo transparente
- Logos → fondo transparente (PNG), altura máxima ~80px
- Videos → formato MP4 (H.264), vertical 9:16 idealmente

---

## Reemplazar videos

1. Guarda tus videos en `assets/videos/` con los nombres `video-1.mp4`, `video-2.mp4`, etc.
2. Si quieres portadas/miniaturas, guarda imágenes en `assets/images/` con los nombres `video-thumb-1.jpg`, etc.

---

## Editar textos, precios y enlaces

Abre `index.html` en cualquier editor de texto (VS Code recomendado). Busca el texto que quieres cambiar con `Ctrl+F` (o `Cmd+F` en Mac).

**Cambios frecuentes:**
- **Precios:** busca `$400.000`, `$650.000`, etc.
- **Testimonios:** busca `Testimonio cliente` y reemplaza con el texto real.
- **WhatsApp:** busca `573104704939` para actualizar el número.
- **Correo:** busca `Valen0118h@gmail.com`.
- **Instagram/TikTok:** busca `vaalenhernandez_`.

---

## Subir a GitHub Pages

### Primera vez

1. Crea una cuenta en [github.com](https://github.com) si no tienes.
2. Crea un repositorio nuevo llamado `portfolio` (o `soyvalenhernandez`).
3. Sube todos los archivos de esta carpeta al repositorio.
4. Ve a **Settings → Pages**.
5. En "Source" selecciona `main` branch y carpeta `/ (root)`.
6. Haz clic en **Save**.
7. En 1-2 minutos tu sitio estará en: `https://tu-usuario.github.io/portfolio`

### Con dominio personalizado (soyvalenhernandez.com)

1. En GitHub Pages (Settings → Pages), escribe tu dominio en "Custom domain".
2. En tu proveedor de dominio, crea estos registros DNS:
   ```
   Tipo A    →  185.199.108.153
   Tipo A    →  185.199.109.153
   Tipo A    →  185.199.110.153
   Tipo A    →  185.199.111.153
   ```
3. Activa **Enforce HTTPS** una vez que propague (puede tardar 24-48h).

### Actualizar el sitio después

1. Edita los archivos localmente.
2. Sube los cambios a GitHub (arrastra los archivos o usa `git push`).
3. GitHub Pages se actualiza automáticamente en ~1 minuto.

---

## Personalización rápida de colores

En `styles.css`, al inicio del archivo, están todas las variables de color:

```css
:root {
  --bg:        #F7F1EA;   /* Fondo principal */
  --bg-dark:   #5B4E45;   /* Fondo oscuro */
  --brown:     #6E3F28;   /* Café principal */
  --accent:    #A46A43;   /* Acento */
  /* ... */
}
```

Cambia cualquier valor hexadecimal y se aplicará en todo el sitio.

---

Hecho con 💛 para Valen Hernández · soyvalenhernandez.com
