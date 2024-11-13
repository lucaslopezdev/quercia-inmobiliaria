export async function getImageDimensions(imageUrls: string[]) {
  const results = await Promise.all(
    imageUrls.map((url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.crossOrigin = "anonymous"; // Asegura que se puede acceder a la imagen en otros dominios

        img.onload = () => {
          resolve({
            image: url,
            width: img.width,
            height: img.height,
          });
        };

        img.onerror = () => {
          console.error(`Error al cargar la imagen: ${url}`);
          resolve(null); // Retorna null en caso de error para filtrar después
        };
      })
    )
  );

  // Filtra los resultados nulos en caso de que alguna imagen no se haya cargado
  return results.filter((result) => result !== null);
}

