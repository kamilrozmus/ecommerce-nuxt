# Zadanie rekrutacyjne

Moduł frontowy sklepu internetowego - Dodawanie produktów do koszyka

## Informacje wstępne

1. Utwórz *Fork Repository* z dostępem publicznym na podstawie repozytorium podanego poniżej oraz udostępnij nam link
2. Wszystkie zmiany *pushuj* na bieżąco do swojego repozytorium
3. Repozytorium bazowe zawiera przygotowany szkielet frameworka Nuxt.js

## Wymagania

1. Użycie frameworka *Nuxt.js*
2. Kod powinien być napisany z zachowaniem nazewnictwa angielskiego 
3. Konto na *github.com*
4. IDE (preferowane *WebStorm*, VSCode)

## Schemat zadania

 1. Stwórz stronę *Lista produktów* i *Szczegóły produktu*.

 2. Stwórz komponent *Koszyk*, który będzie dostępny na stronach (jako *widget*)

 3. Podepnij do projektu jako plugin paczkę npm `vue-my-photos`

 4. Używając `axios` pobierz dane z *API* i zapisz je w `store`

 5. Zaprezentuj na stronie *Lista produktów* poszczególne produkty

 6. Strona *Lista produktów* powinna posiadać funkcjonalności:

    * odświeżanie listy produktów

    * linkowanie do *Szczegóły produktu* (*id* produktu jako dynamiczny parametr adresu)

 7. Strona *Szczegóły produktu* powinna posiadać funkcjonalności

    * linkowanie do *Lista produktów*

    * prezentacja danych wyciągniętych ze *store* po *id* produktu z adresu

    * prezentacja zdjęć/zdjęcia produktu w formię galerii (*vue-my-photos*)

    * dodanie produktu do *Koszyka* przy użyciu `store`

 8. Komponent *Koszyk* powinien posiadać funkcjonalności:

    * prezentacja danych tablicy *Koszyk* przy użyciu `store`

    * usuwanie produktu z tablicy *Koszyk* przy użyciu `store`

 9. Napisz przynajmniej jeden test jednostkowy dla metody pobierającej dane z *API*

## Dane do wykonania zadania

Repozytorium bazowe

```
https://github.com/Digital-Holding/RecruitmentTask
```

Endpoint API do listy produktów

```
https://gorest.co.in/public-api/products
```

Instalacja zależności:
```
yarn install
```

Budowanie wersji deweloperskiej na _localhost_ z _hot reload_:
```
yarn dev
```

## Kwestie podlegające ocenie

* Jakość napisanego kodu
* Implementacja przejrzystego i intuicyjnego UI modułu
* Sposób podejścia do problemu



## Propozycja wyglądu modułu

#### Lista produktów

![](./docs/products_list.png)

#### Produkt

![](./docs/product.png)
