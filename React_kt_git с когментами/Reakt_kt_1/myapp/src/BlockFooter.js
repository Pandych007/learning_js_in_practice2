
// Этот код представляет компонент React под названием Block1, 
// который отображает информацию о веломастерской и изображение.

function Block1(){

    return(
        <div id='wrapper' >
            <div id='wrap-text' >
                <h2>Веломастерская "Велозар"</h2>
                <p>Мы, мастера веломастерской "Велозар", как раз те самые счастливые люди, которые смогли превратить своё увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколёсный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <img id="img1" src="./din 1.jpg"></img>
        </div>
    )
}

export default Block1

// function Block1() { ... }: Это объявление функционального компонента React под названием Block1.
// return (...): Возвращает JSX код, который определяет структуру и внешний вид компонента.
// <div id='wrapper'> ... </div>: Это корневой элемент компонента Block1. Он содержит два дочерних 
// элемента:
// <div id='wrap-text'> ... </div>: Это блок текста. Внутри него располагается заголовок (<h2>) с названием 
//     веломастерской и абзац с описанием.
// <img id="img1" src="./din 1.jpg"></img>: Это тег <img>, который отображает изображение.
//  Путь к изображению указывается в атрибуте src.
// export default Block1;: Экспортирует компонент Block1 по умолчанию, чтобы он мог быть 
// использован в других частях приложения.