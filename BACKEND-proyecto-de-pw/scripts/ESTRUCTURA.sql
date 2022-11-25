--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-22 21:48:26

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16508)
-- Name: categoria; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.categoria (
    id uuid NOT NULL,
    "Nombre" character varying(100) NOT NULL
);


ALTER TABLE public.categoria OWNER TO "Alex";

--
-- TOC entry 215 (class 1259 OID 16493)
-- Name: orden; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.orden (
    id uuid NOT NULL,
    fecha_compra timestamp without time zone,
    "Monto" numeric(10,0),
    "Direccion" numeric(10,0),
    id_usuario uuid
);


ALTER TABLE public.orden OWNER TO "Alex";

--
-- TOC entry 216 (class 1259 OID 16498)
-- Name: orden_producto; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.orden_producto (
    id uuid NOT NULL,
    id_orden uuid,
    id_producto uuid
);


ALTER TABLE public.orden_producto OWNER TO "Alex";

--
-- TOC entry 221 (class 1259 OID 16580)
-- Name: pc_armado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pc_armado (
    id uuid NOT NULL,
    "Nombre" character varying(100),
    "Descripcion" character varying(300)
);


ALTER TABLE public.pc_armado OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16585)
-- Name: pc_armado_producto; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.pc_armado_producto (
    id uuid NOT NULL,
    "id_pcArmado" uuid,
    id_producto uuid
);


ALTER TABLE public.pc_armado_producto OWNER TO "Alex";

--
-- TOC entry 217 (class 1259 OID 16503)
-- Name: producto; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.producto (
    id uuid NOT NULL,
    "SKU" character varying(12) NOT NULL,
    "Nombre" character varying(100) NOT NULL,
    "Precio" numeric(10,0),
    "Descripcion" character varying(200) NOT NULL,
    "Stock" numeric(5,0),
    id_categoria uuid
);


ALTER TABLE public.producto OWNER TO "Alex";

--
-- TOC entry 219 (class 1259 OID 16549)
-- Name: reporte; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.reporte (
    id uuid NOT NULL,
    "Correo" character varying(200),
    "Nombre" character varying(150),
    "Telefono" numeric(9,0),
    "Asunto" character varying(100),
    "Descripcion" character varying(300),
    id_usuario uuid
);


ALTER TABLE public.reporte OWNER TO "Alex";

--
-- TOC entry 220 (class 1259 OID 16568)
-- Name: resena; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.resena (
    id uuid NOT NULL,
    "Puntaje" character varying(100),
    "Comentario" character varying(300),
    "Video" character varying(300),
    "Link" character varying(300),
    id_usuario uuid
);


ALTER TABLE public.resena OWNER TO "Alex";

--
-- TOC entry 214 (class 1259 OID 16482)
-- Name: usuario; Type: TABLE; Schema: public; Owner: Alex
--

CREATE TABLE public.usuario (
    id uuid NOT NULL,
    "Nombre" character varying(150) NOT NULL,
    "Apellido" character varying(150),
    "Correo" character varying(200) NOT NULL,
    "Contraseña" character varying(150) NOT NULL,
    "Pais" character varying(100),
    "Direccion" character varying(200),
    "Celular" numeric(9,0),
    "Departamento" character varying(50),
    "Codigo_Postal" character varying(10)
);


ALTER TABLE public.usuario OWNER TO "Alex";

--
-- TOC entry 3205 (class 2606 OID 16486)
-- Name: usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 16512)
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);


--
-- TOC entry 3207 (class 2606 OID 16497)
-- Name: orden compra_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.orden
    ADD CONSTRAINT compra_pkey PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 16502)
-- Name: orden_producto detalle_compra_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT detalle_compra_pkey PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 16584)
-- Name: pc_armado pc_armado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_armado
    ADD CONSTRAINT pc_armado_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 16616)
-- Name: pc_armado_producto pc_armado_producto_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.pc_armado_producto
    ADD CONSTRAINT pc_armado_producto_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 16507)
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 16555)
-- Name: reporte reporte_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT reporte_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 16579)
-- Name: resena resena_pkey; Type: CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.resena
    ADD CONSTRAINT resena_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 16617)
-- Name: pc_armado_producto fk_Armado_ArmadoProducto; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.pc_armado_producto
    ADD CONSTRAINT "fk_Armado_ArmadoProducto" FOREIGN KEY ("id_pcArmado") REFERENCES public.pc_armado(id) NOT VALID;


--
-- TOC entry 3229 (class 2606 OID 16622)
-- Name: pc_armado_producto fk_Producto_ArmadoProducto; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.pc_armado_producto
    ADD CONSTRAINT "fk_Producto_ArmadoProducto" FOREIGN KEY (id_producto) REFERENCES public.producto(id) NOT VALID;


--
-- TOC entry 3223 (class 2606 OID 16610)
-- Name: orden_producto fk_orden_ordenProducto; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT "fk_orden_ordenProducto" FOREIGN KEY (id_orden) REFERENCES public.orden(id) NOT VALID;


--
-- TOC entry 3225 (class 2606 OID 16538)
-- Name: producto fk_producto_categoria; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_producto_categoria FOREIGN KEY (id_categoria) REFERENCES public.categoria(id) NOT VALID;


--
-- TOC entry 3224 (class 2606 OID 16605)
-- Name: orden_producto fk_producto_ordenProducto; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT "fk_producto_ordenProducto" FOREIGN KEY (id_producto) REFERENCES public.producto(id) NOT VALID;


--
-- TOC entry 3222 (class 2606 OID 16600)
-- Name: orden fk_usuario_orden; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.orden
    ADD CONSTRAINT fk_usuario_orden FOREIGN KEY (id_usuario) REFERENCES public.usuario(id) NOT VALID;


--
-- TOC entry 3226 (class 2606 OID 16556)
-- Name: reporte fk_usuario_reporte; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT fk_usuario_reporte FOREIGN KEY (id_usuario) REFERENCES public.usuario(id) NOT VALID;


--
-- TOC entry 3227 (class 2606 OID 16573)
-- Name: resena fk_usuario_resena; Type: FK CONSTRAINT; Schema: public; Owner: Alex
--

ALTER TABLE ONLY public.resena
    ADD CONSTRAINT fk_usuario_resena FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


-- Completed on 2022-11-22 21:48:26

--
-- PostgreSQL database dump complete
--

