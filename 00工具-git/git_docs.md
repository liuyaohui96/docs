# git_docs

## intro
git：
1. 描述：开源版本控制系统（version control system）
2. 使用git
    * terminal command
    * GitHub Desktop客户端
    * 浏览器访问

[回到顶部](#git_docs)


## 安装
```shell

```

[回到顶部](#git_docs)


## 基础配置 
基础配置：
1. 查看版本`git --version`
2. 配置信息
    * 全局用户名`git config --global user.name 'liuyaohiu'`
    * 配置全局邮箱`git config --global user.email qq8...@126.com`
    * 为单一仓库配置用户名`git config user.name 'liuyaohiu'`
    * 为单一仓库配置用户名配置邮箱`git config user.email qq8...@126.com`
3. 查看配置信息
    * 查看列表`git config --list`
    * 查看指定配置`git config configName`，如`git config user.name`


[回到顶部](#git_docs)


## 初始化（init）
创建仓库目录之后，使用`git init`初始化仓库

[回到顶部](#git_docs)

## 连接仓库
将本地库与线上库连接，`git remote add origin reposityURL`


## 查看仓库状态（status）
查看仓库状态，在对应仓库文件夹使用`git status`

[回到顶部](#git_docs)

## 添加文件到stage（add）
添加文件到stage，使用`git add fileName`，其中`git add.`增加所有文件到stage

[回到顶部](#git_docs)

## 提交stage到本地仓库（committ）
提交stage到仓库，使用`git committ -m committDescription`


[回到顶部](#git_docs)


## 回退提交（checkout）
回退提交，使用`git checkout committDescription fileName`

[回到顶部](#git_docs)


## 本地仓库推送到线上（push）
本地仓库推送到线上，`git push -u origin branckName`，通常分支名称为master

[回到顶部](#git_docs)

## 克隆线上仓库到本地（clone）
克隆线上仓库到本地：`git clone reposityURL`

[回到顶部](#git_docs)

## stash
```shell
# 保存当前未commit的代码
git stash

# 应用最几个一次stash
# 删除该记录
# 可以恢复
git stash apply

# 列出stash
git stash list

# 删除stash
git drop
gir clear
```


[回到顶部](#git_docs)


## 放弃上一次操作（reset）
放弃上一次操作，`git reset HEAD fileName`

```shell
# 恢复最近一次commit
git reset -soft commitId
```

[回到顶部](#git_docs)

## 查看提交日志
查看提交日志，使用`git log --oneline`

[回到顶部](#git_docs)


## 附录

[回到顶部](#git_docs)

## 待解决
1. git rebase
2. 理解Git的核心原理、工作流程、和SVN的区别
3. 快速解决线上分支回滚、线上分支错误合并等复杂问题

[回到顶部](#git_docs)


