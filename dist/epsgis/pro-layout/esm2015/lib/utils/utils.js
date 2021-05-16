// tslint:disable-next-line:max-line-length
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isBrowser = () => typeof window !== 'undefined';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLE1BQU0sR0FBRyxHQUFHLHVLQUF1SyxDQUFDO0FBRXBMLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQVksRUFBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUvRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuY29uc3QgcmVnID0gLygoKF5odHRwcz86KD86XFwvXFwvKT8pKD86Wy07OiY9XFwrXFwkLFxcd10rQCk/W0EtWmEtejAtOS4tXSsoPzo6XFxkKyk/fCg/Ond3dy58Wy07OiY9XFwrXFwkLFxcd10rQClbQS1aYS16MC05Li1dKykoKD86XFwvW1xcK34lXFwvLlxcdy1fXSopP1xcPz8oPzpbLVxcKz0mOyVALlxcd19dKikjPyg/OltcXHddKikpPykkLztcblxuZXhwb3J0IGNvbnN0IGlzVXJsID0gKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4gPT4gcmVnLnRlc3QocGF0aCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiJdfQ==