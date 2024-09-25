#!/bin/bash

readonly BUCKET_NAME="hono-tutorial-local"

# バケット存在確認
# See. https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/example_s3_HeadBucket_section.html
awslocal s3api head-bucket --bucket ${BUCKET_NAME} >/dev/null 2>&1

# バケットがなければ作成
if [[ ${?} -ne 0 ]]; then
    awslocal s3 mb "s3://${BUCKET_NAME}"
fi
