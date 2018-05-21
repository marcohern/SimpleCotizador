CREATE PROCEDURE [dbo].[CotizacionCrear]
	@Cliente    NVARCHAR(350),
	@TipoSeguro NVARCHAR(50),
	@FormaPago  NVARCHAR(50),
	@FechaVencimiento DATETIME,
	@FechaCotizacion  DATETIME,
	@Activa BIT,
	@NumeroPoliza NVARCHAR(50)

AS BEGIN
	INSERT INTO Cotizaciones
	(Cliente, TipoSeguro, FormaPago, FechaVencimiento, FechaCotizacion, Activa, NumeroPoliza)
	VALUES
	(@Cliente, @TipoSeguro, @FormaPago, @FechaVencimiento, @FechaCotizacion, @Activa, @NumeroPoliza)

	SELECT @@IDENTITY AS Id;
END