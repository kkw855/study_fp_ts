// Windows 파일 경로 유효성 검사
export function validatePathOnWindows(s: string, exclusions: string = '/:*?"<>|'): boolean {
  // 맨 앞에 'A:\' 드라이브가 있고 그 이후에 /:*?"<>| 문자가 있으면 안된다
  // 그리고 역슬러시(\)가 연속으로 두 번 있어도 안된다
  // const regex = /[a-zA-Z]:((?![/:*?"<>|])(?!\\{2,}).)*$/
  // return regex.test(s)

  // TODO: 함수가 호출될 때마다 컴파일 발생!!! 캐쉬 기능으로 방지 가능할 듯
  const regex = new RegExp('[a-zA-Z]:((?![' + exclusions + '])(?!\\\\{2,}).)*$')
  return regex.test(s)
}

