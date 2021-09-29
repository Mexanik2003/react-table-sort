--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

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
-- Name: objects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.objects (
    date date,
    name character varying,
    quantity bigint,
    distance real,
    id integer NOT NULL
);


ALTER TABLE public.objects OWNER TO postgres;

--
-- Name: objects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.objects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.objects_id_seq OWNER TO postgres;

--
-- Name: objects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.objects_id_seq OWNED BY public.objects.id;


--
-- Name: objects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objects ALTER COLUMN id SET DEFAULT nextval('public.objects_id_seq'::regclass);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.objects (date, name, quantity, distance, id) FROM stdin;
2021-09-09	Объект1	2	15.5	1
2021-09-10	Объект2	5	17.3	2
2021-08-10	Столб1	10	21.6	3
2021-07-09	Объект17	2	15.5	4
2021-06-05	Объект2	12	47.1	5
2021-08-10	Столб1	6	5.2	6
2021-09-09	Объект1	2	15.5	7
2021-09-10	Объект2	5	17.3	8
2021-08-10	Столб1	10	21.6	9
2021-07-09	Объект17	2	15.5	10
2021-06-05	Объект2	12	47.1	11
2021-08-10	Столб1	6	5.2	12
2021-09-09	Объект1	2	15.5	13
2021-09-10	Объект2	5	17.3	14
2021-08-10	Столб1	10	21.6	15
2021-07-09	Объект17	2	15.5	16
2021-06-05	Объект2	12	47.1	17
2021-08-10	Столб1	6	5.2	18
2021-09-09	Объект1	2	15.5	19
2021-09-10	Объект2	5	17.3	20
2021-08-10	Столб1	10	21.6	21
2021-07-09	Объект17	2	15.5	22
2021-06-05	Объект2	12	47.1	23
2021-08-10	Столб1	6	5.2	24
2021-09-09	Объект1	2	15.5	25
2021-09-10	Объект2	5	17.3	26
2021-08-10	Столб1	10	21.6	27
2021-07-09	Объект17	2	15.5	28
2021-06-05	Объект2	12	47.1	29
2021-08-10	Столб1	6	5.2	30
2021-09-09	Объект1	2	15.5	31
2021-09-10	Объект2	5	17.3	32
2021-08-10	Столб1	10	21.6	33
2021-07-09	Объект17	2	15.5	34
2021-06-05	Объект2	12	47.1	35
2021-08-10	Столб1	6	5.2	36
2021-09-09	Объект1	2	15.5	37
2021-09-10	Объект2	5	17.3	38
2021-08-10	Столб1	10	21.6	39
2021-07-09	Объект17	2	15.5	40
2021-06-05	Объект2	12	47.1	41
2021-08-10	Столб1	6	5.2	42
2021-09-09	Объект1	2	15.5	43
2021-09-10	Объект2	5	17.3	44
2021-08-10	Столб1	10	21.6	45
2021-07-09	Объект17	2	15.5	46
2021-06-05	Объект2	12	47.1	47
2021-08-10	Столб1	6	5.2	48
\.


--
-- Name: objects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.objects_id_seq', 48, true);


--
-- PostgreSQL database dump complete
--

