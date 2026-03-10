# BT
## week 1
### dag 1
#### 16.02.2026
<b>Wat heb ik vandaag gedaan?</b>
Basis html opgezet, ingelezen over de opdracht.
checkout met Patoune

<b>Hoeveel tijd heeft me dat gekost?</b>
6 uur + alle uitleg van Vasilis

<b>Wat heb ik geleerd?</b>
Nog niet zo veel

<b>Wat ga ik morgen doen?</b>
Naar de les!

### dag 2
#### 17.02.2026
#### Workshop Vasilis
Belangrijkste dingen/punten uit de presentatie:
- POST/GET method attribute 
- GET antwoorden komen in de URL
- ```<fieldset>``` = data die gegroepeerd is in een form. 
- Een ```<fieldset>``` moet altijd een ```legend``` hebben.
- Een label is interactief, een label is altijd gekoppeld aan een input

##### :invalid en :valid vs :user-invalid en :user-valid 
user-valid/invalid laten pas de styling zien nadat de gebruiker weg gaat van het input veld ,
met invalid/valid zie je de styling voordat je iets in de input zet

<b>Wat heb ik vandaag gedaan?</b>
Ochtend quiz gevolgd over Tahoe icons (weekly geek) en de workshop van Vasilis gedaan.

<b>Hoeveel tijd heeft me dat gekost?</b>
2 uur

<b>Wat heb ik geleerd?</b>
input validation in css

<b>Wat ga ik morgen doen?</b>
het ander vak

## week 1 voortgang
<details>
<summary>Voortgang 19.02.2026</summary>

Ik ben nu nog bezig met data organiseren en groeperen op de pagina zodat het een logishe flow heeft. Ik wil dat je in een paar stappen door het formulier heen kan navigeren zonder dat het irritant wordt. 

Dingen die we hebben besproken:
- autocomplete attribute
- de css :has selector kan velden ook makkelijk verbergen ipv javascript te gebruiken
- input validation pattern="[0-9]{6}" voor wat je wel en niet in de input wilt hebben
- ```border: none; border-top: 3em solid white;``` voor de styling van legend zodat ie niet door de border heen staat
- Kijk meer naar input[type='radio'] input[type='text'] voor styling zodat je geen extra classes hoeft te gebruiken

We gaan kijken naar input validation en patterns na de vakantie [disabled](https://www.wufoo.com/html5/disabled-attribute/#:~:text=The%20disabled%20attribute%20makes%20the,descendent%20form%20controls%20are%20disabled)


</details>

## week 2

### dag 3
#### 02.03.2026

<b>Wat heb ik vandaag gedaan?</b>
Herstructurering van de HTML op de site en beter nagedacht over de UX van de website

<b>Hoeveel tijd heeft me dat gekost?</b>
2 uur? 3 uur?

<b>Wat heb ik geleerd?</b>
Dat je een fieldset meerdere fieldsets kunt zetten zolang er een legend in zit.

<b>Wat ga ik morgen doen?</b>
- Aan dit vak zitten 
- Meer aan de styling zitten van de website
- De workshop van Vasilis doen
- De weekly geek doen in de ochtend

### dag 4
#### 03.03.2026
Voor de Weekly Geek van vandaag moesten we de UX van de HTML tag anchor onderzoeken en dit element namaken met divs en spans.

WEL
- Focus werkt
- Enter werkt 

NIET
- :visited werkt niet
- Copy link address werkt niet 
- Als je over de echte ```<a>``` hovered dan kan je de link rechtsonder zien
- Betere SEO met ```<a href>```

Het probleem met dit en de echte ```<a>``` tag is dat de Anchor wel door screenreaders wordt gelezen en de span genegeerd wordt als je door de pagina heen gaat.

Mijn element was de ```<a>``` tag, dit is de code:

```
	<span onclick="window.location='https://google.com'">mine</span>
	<a href="https://google.com">real</a>

	span {
		color: blue;
		 text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
		&:visited {
		color:  rgb(51, 0, 255);
		text-decoration-color: rgb(51, 0, 255);
		}
	}
	:active {
		color: red;
	}
```

[:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:visited)
[window.location](https://stackoverflow.com/questions/24062334/onclick-window-location-trying-to-change-to-open-link-in-new-tab)
[:active](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:active)

### Workshop Victor
in JS:
- == checked een value
- === checked ook een value maar is stricter
- event.target.setCustomValidity("Nieuwe tekst");
- form.reportValidity met EventListener('blur')
- .setCustomValidity(""); is een reset
- [area-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
Je kunt JS gebruiken voor validatie die je niet kunt maken in HMTL en CSS.

#### Checkout

<b>Wat heb ik vandaag gedaan?</b>
Meer aan de opmaak gedaan van de site. Ik moet nog werken aan: de vragen disabled maken, legends die bij inputs horen kleiner maken. Tijdens de checkout heeft Thomas mijn probleem met de required vragen gefixt: ```label:has(+ input:required)::after ```

<b>Hoeveel tijd heeft me dat gekost?</b>
4/5 uur

<b>Wat heb ik geleerd?</b>
Met reportValidity kan je een custom message geven aan een bestaande error. Je kan de styling van een bestaande error niet veranderen maar wel de content in de error.

## week 2 voortgang
<details>
<summary>Voortgang 06.03.2026</summary>
- Denk meer aan de ux van je form -> bsn niet in 3 inputs maar 1, je mag de styling van de input wel zo maken als in de pdf
- de form over meerdere pagina's verspreiden is ook ok
- werk meer aan de styling van de site
- style voor radio buttons moet nog gebeuren

</details>

## week 3

### dag 5
#### 09.03.2026
### Onderzoek naar de standaard van form validation
 [Wat is de standaard voor errors op forms?](https://medium.com/@shanplourde/inline-form-validations-ux-design-considerations-and-react-examples-c2f53f89bebc)

Belangrijkste punten:

- Don't show an error when a user is still typing

- Inline validations provide feedback early and often to end users, so they provide a significant usability benefit.

- Positive inline validation removes some cognitive load from users since they don’t have to review and validate the form for errors before submitting it.



[Examples](https://baymard.com/blog/inline-form-validation)
> In testing, we’ve repeatedly observed that a better solution to error messaging that consistently improved the participants’ error-recovery experience was live inline validation.

> Live inline validation is where the validity of the user’s input is checked immediately as the user types in the full value or leaves the field.

> Because users are alerted to input issues immediately after typing, the amount of time needed to correct the error decreases significantly, as the input and its context are still fresh in the user’s mind.

1. Avoid premature validation
	Omdat het frustrerend is
2. Remove error messages as soon as the field is corrected
	Zodat je niet verward raakt als je de input wel goed invuld maar dat pas ziet als je op de submit knop klikt
3. Use “positive inline validation” for all fields
	Omdat dit confirmatie is dat er niets mis is gegaan


Checkout met Jean-Carlos
<b>Wat heb ik vandaag gedaan?</b>
Gast les van [Rijk van zanten](https://directus.io/team/rijk-van-zanten) in de ochtend. Hij heeft ook deze minor gedaan in 2017. 

Eindelijk meer gedaan aan de input validation en patterns. De standaard error uitgezet om mijn eigen custom error te gebruiken

<b>Hoeveel tijd heeft me dat gekost?</b>
5 uur

<b>Wat heb ik geleerd?</b>
De standaard van form validation en waarom de UX daarvan uitmaakt.


<b>Wat ga ik morgen doen?</b>
De progressive disclosure maken en nog een tweede pattern vinden om te implementeren.

### dag 6
#### 10.03.2026
Checkout met Jean-Carlos

<b>Wat heb ik vandaag gedaan?</b>

<b>Hoeveel tijd heeft me dat gekost?</b>

<b>Wat heb ik geleerd?</b>

<b>Wat ga ik morgen doen?</b>

## week 3 voortgang
<details>
<summary>Voortgang 13.03.2026</summary>
</details>

## week 4

### dag 7
#### 16.03.2026

### dag 8
#### 17.03.2026


## bronnen
[:user-valid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:user-valid)
[:user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:user-invalid)