# Reportes de Mantenimiento — I Keu Ken

> Interno. Esta carpeta **sí se publica**: el cliente entra por la URL de abajo.
> No pongas acá nada que no quieras que vea.

## URL para compartir con el cliente

```
https://ikeuken.com.ar/mantenimiento/
```

Mel entra ahí y ve el listado con todos los reportes publicados.

---

## ⚠️ Lo que cambia respecto de Terminal Suites

No copies el flujo de Terminal Suites tal cual. Tres diferencias:

| | Terminal Suites | **I Keu Ken** |
|---|---|---|
| Medición | Google Analytics 4 | **Cloudflare Web Analytics** |
| Plan | USD 25 (básico) | **USD 35 — Plus** |
| Datos externos | — | **El cliente manda el reporte de Hostelworld** |

**El plan Plus obliga a un reporte ampliado**, no el básico:
- Fuentes de tráfico
- **Comparativa mes a mes**
- Recomendaciones

Además el Plus incluye **dominio gestionado por Teo** y **backups periódicos**.
Al 16/10/2026 esas dos cosas **todavía no están hechas** — ver `PROYECTO.md`.

---

## Estructura

```
mantenimiento/
├── index.html                        # Portada: listado de reportes
├── reporte-octubre2026.html          # Mes 1
├── propuesta-mantenimiento-dark.html # Propuesta original (referencia)
└── INSTRUCCIONES.md                  # Este archivo
```

---

## Cómo agregar el reporte de cada mes

### 1. Crear el HTML

Copiá `reporte-octubre2026.html` a `reporte-MESAÑO.html` (ej. `reporte-noviembre2026.html`)
y actualizá el `<title>`, el `<h1>`, el eyebrow (`Mes N · Plan Plus`), el período y el
contenido.

**No toques** el CSS ni el `<script>` del final: la fecha del pie se genera sola.

### 2. Sacar los datos de Cloudflare

`dash.cloudflare.com` → **ikeuken.com.ar** → Analytics → **Web Analytics**
→ rango: el mes anterior completo.

De ahí salen:
- **Visitas** (page views)
- **Personas distintas** (visitors)
- **Páginas más vistas**
- **De dónde llegó la gente** (referrers)

> El token del beacon es `099ceb1643f04e0bab2bbb26f4bdb96e`, instalado en el
> `index.html` del sitio. Si alguna vez deja de medir, chequeá que ese script siga ahí.

**Los huecos sin completar están marcados en amarillo** con la clase `.falta` y hay un
bloque `.aviso` arriba de los números. Buscá `falta` y `aviso` en el HTML antes de mandar
nada — si queda alguno, el cliente ve un cuadrito amarillo que dice "completar".

### 3. Sumar el reporte al listado

En `index.html`, dentro del array `reportes`, agregá el nuevo bloque **arriba de todo**
(el más reciente va primero — la línea de tiempo se lee de arriba hacia abajo):

```javascript
const reportes = [
  {
    titulo: 'Noviembre 2026',
    periodo: 'noviembre 2026',
    etiqueta: 'Mes 2',
    resumen: 'Una o dos frases en criollo sobre lo más importante del mes.',
    archivo: 'reporte-noviembre2026.html'
  },
  // los anteriores quedan debajo
];
```

El reporte que quede primero se marca solo como el más reciente (punto celeste lleno).

### 4. Publicar

```bash
cd CLIENTES/keuken
git add mantenimiento/
git commit -m "Agregar reporte de noviembre 2026"
git push origin cf-keuken
git push origin cf-keuken:main   # esto es lo que lo pone en vivo
```

> ⚠️ **Ojo con las dos ramas.** Se trabaja en `cf-keuken`, pero el sitio publica desde
> `main`. Si solo hacés el primer push, el cliente **no ve nada**.

---

## Qué poner en cada reporte

1. **Qué se hizo** — en criollo, con un "por qué importa" en cada ítem. Mel no es
   técnica: no sirve decirle "se corrigió el canonical", sirve decirle "el sitio tenía
   escrita la dirección de otra calle".
2. **Los números** — visitas, personas, páginas más vistas, de dónde llegaron.
3. **Comparativa mes a mes** — obligatoria desde el mes 2 (es lo que paga el Plus).
4. **Qué conviene hacer** — recomendaciones concretas, no solo datos.

---

## Flujo mensual

```
Día 1-25     Cambios y mantenimiento del sitio
Día 25-31    Sacar los datos de Cloudflare
Día 1-3      Armar el reporte, publicarlo y mandar el link
Día 1-10     Cobrar el mes (alias teo.cicciari, Mercado Pago)
```

El cobro y el reporte caen en la misma ventana: **mandá el reporte antes de cobrar**,
no después. Es la mejor forma de que el cobro no se sienta como un débito más.

---

## Mensaje para mandarle el link

```
Hola Mel! Ya está el reporte de noviembre:
https://ikeuken.com.ar/mantenimiento/

Adentro está cuánta gente entró al sitio, de dónde llegó y qué se hizo este mes.
Cualquier cosa me decís 👍
```

---

## Contacto

**Teo Cicciari** · teocicciari@gmail.com · https://teocicciari.com.ar
