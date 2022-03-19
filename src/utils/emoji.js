const emojiRegex =
    /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/u;

/**
 * 문자열 내에 존재하는 이모지 리턴
 * @param {string} str
 * @returns {array<string>|null}
 */
export const findEmoji = (str) => emojiRegex.exec(str);

/**
 * 이모지를 이미지로 변환
 * @param {string} text
 * @returns {string|null} 이미지화 된 이모지
 */
export const textToImage = (text) => {
    if (typeof text !== "string") {
        return null;
    }

    const elText = `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' style='${createShadowFilter(
        1,
        "rgba(0,0,0,0.3)"
    )}'>${text}</text>`;

    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:28px;'>${elText}</svg>`;
};

function createShadowFilter(offset = 1, color = "black") {
    const direction = [
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1],
    ];

    const dropShadowArr = direction.map(
        (dir) =>
            `drop-shadow(${dir[0] * offset}px ${dir[1] * offset}px 0 ${color})`
    );

    return "filter:" + dropShadowArr.join(" ") + ";";
}
