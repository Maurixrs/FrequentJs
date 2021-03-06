CREATE FUNCTION ObtenerEdad (@dFechaNac DATE)
RETURNS INT
AS
BEGIN	
	IF DATEFROMPARTS(YEAR(GETDATE()),MONTH(@dFechaNac),DAY(@dFechaNac)) > CONVERT(DATE,GETDATE())
		RETURN DATEDIFF(YEAR,@dFechaNac,GETDATE()) - 1

	RETURN DATEDIFF(YEAR,@dFechaNac,GETDATE())
END
