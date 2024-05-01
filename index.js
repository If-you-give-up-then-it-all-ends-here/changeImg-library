const generateImgSrcArray = (targetImg, extension)=>{
	return targetImg.split("/").pop().replace(`.${extension}`, "").split("_");
}

const hasAfter = (array, name)=>{
	return array[array.length - 1].includes(name);
}

const changeImgSrcForTarget = (targetImg, extension, name) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg, extension)

	if(!hasAfter(array)){
		array.push(name)
		replacing_img = `${array.join("_")}.${extension}`
	}
	return replacing_img

}
const changeImgSrcForTargetWithMuliti = (targetImg, clickCount, extension, count, name) =>{
	let array = generateImgSrcArray(targetImg, extension)

	 // "after" を追加または削除する条件をチェック
	 if (hasAfter(array)) {
	     array.splice(array.length - 1, 1); // "after" があれば削除
	     clickCount["count"]--; // クリックカウントを減少
	 } else if (clickCount["count"] < count) {
	     array.push(name); // "after" を追加
	     clickCount["count"]++; // クリックカウントを増加
	 }

	return `${array.join("_")}.${extension}`
}


const changeImgSrcForOthers = (targetImg, others, extension, name) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg)
	let array_others	= generateImgSrcArray(others)

	if(hasAfter(array)){
		if(hasAfter(array_others)){
			array_others.splice(array_others.length -1, 1)
			replacing_img = `${array_others.join("_")}.${extension}`
		}
	}else{
		if(!hasAfter(array)){
			array_others.push(name)
			replacing_img = `${array_others.join("_")}.${extension}`
		}
	}
	return replacing_img
}


const changeAnswerImg = (answers, extension, count, name)=>{
	let clickCount = {count: 0};
	answers.forEach((answer)=>{
		answer.addEventListener("click", (e)=>{
			// 選択した答えのimgタグを取得
			let targetImg = e.target.src
			let otherImgs = Array.from(answers).filter((answer) => answer !== e.target)

			if(count == 1){
				if(changeImgSrcForTarget(targetImg, extension, name) !== ""){
					e.target.src= `img/${changeImgSrcForTarget(targetImg, extension, name)}`
				}
				Array.from(otherImgs).forEach((otherImg)=>{
					if(otherImgs !== e.target){
						if(changeImgSrcForOthers(e.target.src, otherImg.src, extension, name) !== ""){
							otherImg.src= `img/${changeImgSrcForOthers(e.target.src, otherImg.src, extension, name)}`
						}
					}
				})
			}else{
	
				Array.from(otherImgs).forEach((otherImg)=>{
					if(otherImg !== e.target && clickCount["count"] == 0){
						let array = generateImgSrcArray(otherImg.src, extension)
						let array2 = generateImgSrcArray(targetImg, extension)
						if(hasAfter(array)){
							clickCount["count"] = 1
						}
						if(hasAfter(array2)){
							clickCount["count"] = 1
						}
					}
				})
			
				e.target.src= `img/${changeImgSrcForTargetWithMuliti(targetImg, clickCount, extension, count, name)}`
			}
		})
	})
}

export {changeAnswerImg}