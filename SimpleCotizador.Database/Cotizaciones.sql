CREATE TABLE [dbo].[Cotizaciones]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [Cliente] NVARCHAR(350) NOT NULL, 
    [TipoSeguro] NVARCHAR(50) NOT NULL, 
    [FormaPago] NVARCHAR(50) NOT NULL, 
    [FechaVencimiento] DATETIME NOT NULL, 
    [FechaCotizacion] DATETIME NOT NULL, 
    [Activa] BIT NOT NULL, 
    [NumeroPoliza] NVARCHAR(50) NOT NULL,

)
