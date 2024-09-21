1. install git
2. some global git configuration
    ```git
    git --version
    git config --glbal user.name 'liuyaohiu'
    git config --gobal user.email qq8...@126.com
    git ocnfig --list
    ```

3. basci git command
    ```git
    // 命令行进入当前目录
    git init

    // 查看reposity状态
    git status

    // 增加所有文件到staging area
    git add.

    // 提交staging area到reposity
    git committ -m 'description'

    // 查找git仓库的提交命令
    git log --oneline

    // 回退上一次提交
    git checkout 'command-description' <file>

    // 放弃上一次操作
    git reset HEAD <file>


    // 将本地库与线上库对接
    git remote add origin <reposity URL>

    // 将本地更新推送到线上
    git push -u origin  master

    // 克隆reposity
    git clone <reposity URL>

    ```

