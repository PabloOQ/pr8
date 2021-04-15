# PR8 CIU

A finales del año pasado, con motivo del Processing Community Day @ Madrid – 2020
Medialab Prado lanzó un call for #tinycode sketches, el resultado puede verse a través de
youtube:

"Enviar vuestro código de programación creativa de menos de 256 caracteres y se proyectará
en los 192 x 157 píxeles de la fachada digital de Medialab Prado el 12 de diciembre 2020."

Para esta tarea, la propuesta es seguir las restricciones de la llamada, si bien relajar la
limitación hasta los 1024 caracteres. Se obviará el paso final de proyección sobre la fachada
de nuestro edificio.

Author - Pablo Ortigosa

# Morphing Grid

## Decisiones

Por la simpleza de la práctica pocas decisiones se han tomado más allá de los parámetros y funciones usadas para los ratios. Debido al funcionamiento del color en modo HSL el cambio de colores viene implementado como una función diente de sierra, que es un módulo. El resto de ratios son simples senos ajustando sus diferentes parámetros. Se invita a cualquiera a probar diferentes funciones y parámetros dentro del código. Aviso:  cambiar los ratios puede provocar epilepsia.

Además el ratio del color tiene un valor que poco a poco cambia los colores de las ondas, por lo que a la larga se puede notar como las distintas ondas no tienen siempre el mismo color.

## Implementación

La entrega consiste en una matriz de tamaño (*grid*x*grid*), para inicializarla se ha reinterpretado el sistema de coordenadas de esta para que el centro sea (0,0) y luego se han inicializado los valores a `(-abs(x) - abs(y)) + grid` de esta forma los valores son decrecientes a medida que se alejan del centro (y positivos).

El formato de colores usado es HSL pues es más cómodo trabajar así.

Tras esto, en *draw* se aumenta siempre al principio de cara iteración el valor de los elementos. Aquí es la parte donde se puede modificar el código para que con la misma base se consigan resultados ligeramente distintos pues cada uno es una función distinta:
* El lado del cuadrado viene definido por `squareSize * ((1 + sin((m[i][j]) * squareRatio)) / 2)` siendo *squareRatio* el ratio al que cambian de tamaño los cuadrados
* El radio de la esquina del cuadrado viene definido por `(squareSize / 2) * ((1 + sin((m[i][j]) * circleRatio + PI)) / 2)` siendo *circleRatio* el ratio al que cambia el cuadrado a círculo
* El cambio de color viene definido por `color((m[i][j] * colorRatio) % 360`
* Además los valores se incrementan por igual en toda la matriz con la variable *step*

Aviso:  cambiar los ratios puede provocar epilepsia.

Se recomienda mantener *squareRatio* y *colorRatio* al mismo valor.

## Notas

Aviso: cambiar los ratios puede provocar epilepsia.

Para editar el código y probar cosas nuevas [hacer click aquí](https://editor.p5js.org/PabloOQ/sketches/tVj3spf5N)

Aumentar demasiado el grid ralentizará la aplicación

Doy aquí múltiples valores que dan buenos resultados, recomiendo combinarlos:
* grid: 1, 2, 3, 5, 9, 21, 41 (valores impares para que el centro se ubique en el centro)
* squareRatio: 1, 2, 3, 4, 5, ,6, 7, 8
* circleRatio: 1, 2, 3, 4, 5, ,6, 7, 8
* colorRatio: 3, 5, 10, 15, 20, 50, 100, 200, 400, 800, 1600, 3200

## Referencias

El material de clase - @otsedom y Daniel.

P5.js API.

Javascript API.

## Vista final

[Morphing Grid](https://editor.p5js.org/PabloOQ/full/tVj3spf5N)
