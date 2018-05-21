CREATE PROCEDURE [dbo].[CotizacionesConsultar]
	@Q NVARCHAR(350) = NULL
AS BEGIN
	SELECT * FROM Cotizaciones 
	WHERE @Q IS NULL OR 
	(Cliente LIKE '%'+@Q+'%' OR NumeroPoliza LIKE '%'+@Q+'%')
END
