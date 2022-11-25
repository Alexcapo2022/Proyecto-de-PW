--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-22 20:58:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3361 (class 0 OID 16508)
-- Dependencies: 218
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: Alex
--

INSERT INTO public.categoria VALUES ('e16c4036-6640-11ed-9022-0242ac120002', 'Power Supply');
INSERT INTO public.categoria VALUES ('e16c3e1a-6640-11ed-9022-0242ac120002', 'Windows');
INSERT INTO public.categoria VALUES ('e16c3bfe-6640-11ed-9022-0242ac120002', 'Cooler');
INSERT INTO public.categoria VALUES ('e16c3992-6640-11ed-9022-0242ac120002', 'Storage');
INSERT INTO public.categoria VALUES ('e16c2eca-6640-11ed-9022-0242ac120002', 'Memory');
INSERT INTO public.categoria VALUES ('e16c2c4a-6640-11ed-9022-0242ac120002', 'Processor');
INSERT INTO public.categoria VALUES ('e16c279a-6640-11ed-9022-0242ac120002', 'Graphics');


--
-- TOC entry 3360 (class 0 OID 16503)
-- Dependencies: 217
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: Alex
--

INSERT INTO public.producto VALUES ('f9d819d9-b32c-421f-a97c-a97db8b08134', 'GA-98765', 'Power supply', 60, 'Una fuente de alimentación convierte la corriente alterna (AC) en una forma continua de energía que los componentes del ordenador necesitan para funcionar, llamada corriente continua (DC).', 140, 'e16c4036-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92c18a-6642-11ed-9022-0242ac120002', 'BP-95165', 'Windows 10 - 64bits', 120, 'Procesador:	Procesador a 1 GHz o más rápido o sistema en un chip (SoC)
RAM: 2 GB para 64 bits
Espacio en disco duro: 32 GB para SO de 64 bits', 100, 'e16c3e1a-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92bee2-6642-11ed-9022-0242ac120002', 'AM-27526', 'Cooler ', 70, 'El ventilador de diseño de 3 pines y su almohadilla anti vibración pueden reducir el ruido y la vibración de manera efectiva.', 30, 'e16c3bfe-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92bc1c-6642-11ed-9022-0242ac120002', 'GX-24680', 'Toshiba 1TB', 100, 'Velocidad de rotación de disco duro: 5400 RPM.
Tiempo de búsqueda promedio de disco duro: 12 ms.
Tasa de transferencia (máx): 480 Mbit/s.', 100, 'e16c3992-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92b834-6642-11ed-9022-0242ac120002', 'TX-13579', 'Memoria Ram 8GB', 150, 'Frecuencia :3200MHz
Latencia: CL16
Voltaje: 1,35 V
Temperatura de funcionamiento: 0 ° C hasta 85 ° C
Dimensiones:13.33 x 3.41 x 0.72 cm', 45, 'e16c2eca-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92b0d2-6642-11ed-9022-0242ac120002', 'WR-67890', 'Nvidia Geforce rtx 3080', 700, 'Núcleo gráfico GA102 en 8 nm.
8.960 shaders a 1.440 MHz-1.710 MHz.
70 núcleos RT.
12 GB de GDDR6X a 19 GHz.
', 15, 'e16c279a-6640-11ed-9022-0242ac120002');
INSERT INTO public.producto VALUES ('ed92ad6c-6642-11ed-9022-0242ac120002', 'WR-12345', 'Intel Core i9', 400, '8 núcleos y 16 hilos
Velocidad de hasta 5.0 GHz
Frecuencia de base de 1.7 GHz 
Puede generar 50.0 W ', 50, 'e16c2c4a-6640-11ed-9022-0242ac120002');


--
-- TOC entry 3359 (class 0 OID 16498)
-- Dependencies: 216
-- Data for Name: detalle_compra; Type: TABLE DATA; Schema: public; Owner: Alex
--



--
-- TOC entry 3358 (class 0 OID 16493)
-- Dependencies: 215
-- Data for Name: compra; Type: TABLE DATA; Schema: public; Owner: Alex
--



--
-- TOC entry 3357 (class 0 OID 16482)
-- Dependencies: 214
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: Alex
--



--
-- TOC entry 3362 (class 0 OID 16549)
-- Dependencies: 219
-- Data for Name: reporte; Type: TABLE DATA; Schema: public; Owner: Alex
--



--
-- TOC entry 3363 (class 0 OID 16568)
-- Dependencies: 220
-- Data for Name: resena; Type: TABLE DATA; Schema: public; Owner: Alex
--



-- Completed on 2022-11-22 20:58:38

--
-- PostgreSQL database dump complete
--

