export class FileItem {

  fileName: string;

  md5Name: string;

  frontRoute: string;

  passwd: string;

  fileType: string;

  fileContent: string;
  /**
   * 文件后缀
   */
  fileSuffix: string;

  /**
   * 改成非静态的一直报错...不知道为什么
   * @param {FileItem} item
   * @returns {string}
   */
  static getFilePath(item: FileItem): string {
    return `${item.frontRoute}/${item.md5Name}/${item.passwd}`;
  }

}
