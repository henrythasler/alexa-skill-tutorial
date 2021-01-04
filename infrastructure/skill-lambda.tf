resource "aws_iam_role" "alexa_skill_lambda_role" {
  name = "alexa_skill_lambda_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "exec-role" {
  role = aws_iam_role.alexa_skill_lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"   # FIXME: check if this policy can be downgraded to something with less permissions
}

resource "aws_lambda_layer_version" "lambda_layer" {
  layer_name = "alexa_layer"
  filename   = "../dist/alexa_layer.zip"
  source_code_hash = filebase64sha256("../dist/alexa_layer.zip")
  compatible_runtimes = ["nodejs12.x"]
}

resource "aws_lambda_function" "tutorial_lambda" {
  function_name = "alexa-skill-tutorial"
  role          = aws_iam_role.alexa_skill_lambda_role.arn

  filename      = "../dist/lambda_function.zip"
  source_code_hash = filebase64sha256("../dist/lambda_function.zip")
  runtime       = "nodejs12.x"
  handler       = "index.handler"

  layers        = [aws_lambda_layer_version.lambda_layer.arn]
}

resource "aws_lambda_permission" "with_alexa" {
  statement_id      = "AllowExecutionFromAlexa"
  action            = "lambda:InvokeFunction"
  function_name     = aws_lambda_function.tutorial_lambda.function_name
  principal         = "alexa-appkit.amazon.com"
  event_source_token = var.skill_id
}